import React from 'react';
import {DashComponentProps} from '../props';
import {Title, Header, TitleBotIcon, AssistantName} from "../styles/chat/header"
import {
    Messages,
    MessageBotIcon,
    MessageTimestamp,
    LinkInMessage,
    NewUserMessage,
    NewBotMessage,
    LoadingNewBotMessage,
    NewBotAction
} from "../styles/chat/messages"
import {MessageBox, MessageInput, MessageSubmit} from "../styles/chat/footer"
import styled from "styled-components"
import TrackingLastComponent from "./TrackingLastComponent"


interface History {
    role: string,
    content: string,
    date: Date
}

type Props = {
    /**
     * A Bot name that will be printed when this component is rendered.
     */
    bot_name: string,

    /**
     * A Bot icon that will be shown when this component is rendered.
     */
    avatar_image_path: string,

    is_bot_typing: boolean,
    n_submits: number,
    initial_user_input_value: string,
    user_input_value: string,
    last_submitted_user_input_value: string,
    history: History[],
    _disable_submission: boolean,
    disable_submission: boolean,
    disable_submission_after_user_sends: boolean,
    disable_textarea: boolean,

    min_standard_font_size_in_px: number,
} & DashComponentProps

const defaultProp = {
    id: undefined,
    is_bot_typing: false,
    n_submits: 0,
    initial_user_input_value: "",
    user_input_value: "",
    last_submitted_user_input_value: undefined,
    history: undefined,
    _disable_submission: false,
    disable_submission: false,
    disable_submission_after_user_sends: false,
    disable_textarea: false,

    min_standard_font_size_in_px: 0,
}

type State = {
    width: number,
    height: number,
    standard_font_size_in_px: number
}


/**
 * Chat Component built for Dash
 */
export default class ChatComponent extends React.Component<Props, State> {
    static defaultProps = defaultProp

    private readonly textarea_ref: React.RefObject<HTMLTextAreaElement> = React.createRef();
    private readonly scrollbar_ref: React.RefObject<TrackingLastComponent> = React.createRef();
    private readonly ref: React.RefObject<HTMLDivElement> = React.createRef();

    private last_message_date: Date | undefined = undefined;

    private track_scroll_event: boolean;
    private resizeObserver: ResizeObserver;

    constructor(props: Props) {
        super(props);
        this.state = {width: 0, height: 0, standard_font_size_in_px: 0}

        this.textarea_ref = React.createRef()
        this.ref = React.createRef()

        this.track_scroll_event = true

        this.resizeObserver = new ResizeObserver(() => {this.onResize()})
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): any {
        const {
            history,
            setProps,
        } = this.props;

        if (history != undefined && !history.every((message) => message["date"] instanceof Date)) {
            setProps({
                history: history.map(
                    (message) => {
                        if (message["date"] == undefined) {
                            message["date"] = new Date()
                        } else {
                            message["date"] = new Date(message["date"])
                        }
                        return message
                    }
                )
            })
        }
        return null
    }

    render() {
        const {
            id,
            bot_name, avatar_image_path,
            is_bot_typing,
            _disable_submission,
            disable_textarea,
            history,
            user_input_value,
            min_standard_font_size_in_px,
            setProps,
        } = this.props;

        console.debug("onRender:", this.props, this.state)

        const onSubmit = () => {
            const {
                n_submits,
                _disable_submission,
                disable_submission_after_user_sends,
                setProps,
            } = this.props;
            console.debug("onSubmit:", n_submits, _disable_submission, disable_submission_after_user_sends)
            const msg = this.textarea_ref.current?.value
            if (msg && _disable_submission !== true) {
                setProps({
                    n_submits: n_submits + 1,
                })
                if (history != undefined) {
                    setProps({
                        history: [
                            ...history,
                            {role: "user", content: msg, date: null}
                        ]
                    })
                } else {
                    setProps({
                        history: [
                            {role: "user", content: msg, date: null}
                        ]
                    })
                }
                console.debug("disable_submission_after_user_sends", disable_submission_after_user_sends)

                this.textarea_ref.current!.value = ""
                if (disable_submission_after_user_sends === true) {
                    setProps({
                        _disable_submission: true
                    })
                }

                setProps({
                    user_input_value: "",
                    last_submitted_user_input_value: msg
                })
            }
        }

        let messages = []
        this.last_message_date = undefined

        if (history != undefined) {
            for (const message of history) {
                let date;
                if (message["date"] == undefined) {
                    date = new Date()
                } else {
                    date = new Date(message["date"])
                }

                switch (message["role"]) {
                    case "user":
                        messages.push(
                           <NewUserMessage key={`user-message-${messages.length}`} onAnimationEnd={() => this.scrollbar_ref.current?.scrollToBottomIfPossible()}>
                               {this.getFormattedMessageList(message["content"])}
                               {this.getDateTag(date)}
                           </NewUserMessage>
                        )
                        break
                    case "assistant":
                        messages.push(
                           <NewBotMessage key={`bot-message-${messages.length}`} onAnimationEnd={() => this.scrollbar_ref.current?.scrollToBottomIfPossible()}>
                               {this.getMessageAvatarTag()}
                               {this.getFormattedMessageList(message["content"])}
                               {this.getDateTag(date)}
                           </NewBotMessage>
                        )
                        break
                    case "assistant-action":
                        messages.push(
                           <NewBotAction key={`bot-action-${messages.length}`} onAnimationEnd={() => this.scrollbar_ref.current?.scrollToBottomIfPossible()}>
                               {this.getFormattedMessageList(message["content"])}
                           </NewBotAction>
                        )
                        break
                    default:
                        console.error(`unexpected role: ${message["role"]}`)
                }
            }
        }

        if (is_bot_typing) {
            messages.push(
                <LoadingNewBotMessage key="bot-updating-message" onAnimationStart={() => this.scrollbar_ref.current?.scrollToBottomIfPossible()}>
                    {this.getMessageAvatarTag()}
                    <span></span>
                </LoadingNewBotMessage>
            )
        }

        const fontSize = Math.max(this.state.standard_font_size_in_px, min_standard_font_size_in_px)
        console.debug("fontSize", fontSize, this.state.standard_font_size_in_px, min_standard_font_size_in_px)
        return (
            <Main id={id} ref={this.ref} fontSize={fontSize}>
                <Header>
                    <TitleBotIcon rootWidth={this.state.width} rootHeight={this.state.height}>
                        <img src={avatar_image_path} alt="Bot Icon"/>
                    </TitleBotIcon>
                    <Title>
                        <AssistantName>{bot_name}</AssistantName>
                    </Title>
                </Header>

                <Messages>
                    <TrackingLastComponent
                        setProps={() => {}}
                        children={messages}
                    />
                </Messages>

                <MessageBox rootHeight={this.state.height}>
                    <MessageInput
                        ref={this.textarea_ref}
                        name="user-input"
                        disabled={disable_textarea}
                        placeholder="Type message..."
                        onKeyDown={
                            (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
                                if (!event.shiftKey && (event.key === "Enter")) {
                                    onSubmit()
                                    event.preventDefault()

                                    if (this.textarea_ref.current) {
                                        this.textarea_ref.current.style.height = String(0)
                                    }
                                }
                            }
                        }
                        onInput={
                            () => {
                                this.adjustTextArea()
                                // setProps({user_message: this.textarea_ref.current?.value})
                            }
                        }
                        value={user_input_value}
                        onChange={
                            (event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setProps({user_input_value: event.target.value})
                            }
                        }
                        rootWidth={this.state.width}
                        rootHeight={this.state.height}
                    />
                    <MessageSubmit
                        disabled={_disable_submission}
                        type="submit"
                        onClick={
                            () => onSubmit()
                        }
                        rootWidth={this.state.width}
                        rootHeight={this.state.height}
                    >
                        Send
                    </MessageSubmit>
                </MessageBox>
            </Main>
        );
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
        console.debug("shouldComponentUpdate", nextProps, nextState, nextContext)
        this.props.setProps({disable_submission: nextProps._disable_submission})
        return true
    }

    componentDidMount() {
        console.debug("componentDidMount")
        const {
            initial_user_input_value,
            setProps,
        } = this.props;
        setProps({user_input_value: initial_user_input_value})

        // on resize
        if (this.ref.current) {
            this.resizeObserver.observe(this.ref.current)
        }
    }

    componentDidUpdate(prevProps: Props, prevState: Readonly<State>, snapshot?: any) {
        this.adjustTextArea()
    }

    onResize() {
        if (this.ref.current && (this.ref.current.offsetWidth !== this.state.width || this.ref.current.offsetHeight !== this.state.height)) {
            const current_width = this.ref.current.offsetWidth
            const current_height = this.ref.current.offsetHeight
            const current_standard_font_size_in_px = current_height * 20 / 500

            console.debug(`onResize: ${current_width}x${current_height}`)
            this.setState({
                width: current_width,
                height: current_height,
                standard_font_size_in_px: current_standard_font_size_in_px
            })
        }
    }

    getDateTag(date: Date) {
        let time = undefined
        if (
            (this.last_message_date == null)
            ||
            (
                this.last_message_date.getFullYear() !== date.getFullYear()
                ||
                this.last_message_date.getMonth() !== date.getMonth()
                ||
                this.last_message_date.getDate() !== date.getDate()
                ||
                this.last_message_date.getHours() !== date.getHours()
                ||
                this.last_message_date.getMinutes() !== date.getMinutes()
            )
        ) {
            this.last_message_date = date;
            time = String(date.getHours()).padStart(2, "0") + ":" + String(date.getMinutes()).padStart(2, "0")
        }
        return (
            <MessageTimestamp>
                {time}
            </MessageTimestamp>
        )
    }

    getFormattedMessageList(msg: string) {
        // Markdown-style link in message
        const regex = /\[(.+?)]\((.+?)\)/
        return msg
            .split(/(\[.+?]\(.+?\))/)
            .map(
            (m) => {
                const matched = regex.exec(m)
                if (matched == undefined) {
                    return m
                } else {
                    return (
                        <LinkInMessage
                            href={matched[2]}
                            target="_blank"
                            rel="noopener noreferrer">
                            {matched[1]}
                        </LinkInMessage>
                    )
                }
            }
        )
    }

    getMessageAvatarTag() {
        const {avatar_image_path} = this.props;

        return (
            <MessageBotIcon rootWidth={this.state.width}>
                <img src={avatar_image_path} alt="Bot Icon"/>
            </MessageBotIcon>
        )
    }

    adjustTextArea() {
        const this_textarea = this.textarea_ref.current
        if (this_textarea) {
            this_textarea.style.height = String(0)
            this_textarea.style.height = this_textarea.scrollHeight + "px"
        }
    }
}


const Main = styled.div<{fontSize: number}>`
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    font-size: ${({fontSize}) => `${fontSize}px`}
`
