import React from 'react';
import PropTypes, {InferProps} from 'prop-types';
// @ts-ignore
import {Title, Header, TitleBotIcon} from "../styles/chat/header"
// @ts-ignore
import {Messages, MessageBotIcon, MessageTimestamp, NewUserMessage, NewBotMessage, LoadingNewBotMessage} from "../styles/chat/messages"
// @ts-ignore
import {MessageBox, MessageInput, MessageSubmit} from "../styles/chat/footer"
import { Scrollbars } from 'react-custom-scrollbars';
import styled from "styled-components"
import {Dict} from "styled-components/native/dist/types";


interface History {
    role: string,
    content: string,
    date: Date
}

interface Prop {
    id: string,
    bot_name: string,
    avatar_image_path: string,
    user_message: string,
    is_bot_typing: boolean,
    send_bot_message: string,
    n_submits: number,
    initial_history: History[],
    history: History[],
    setProps: Function
}

interface State {
    width: number,
    height: number
}

const defaultProp = {
    id: undefined,
    user_message: "",
    is_bot_typing: false,
    send_bot_message: null,
    n_submits: 0,
    initial_history: [],
    history: []
}


export default class Chat extends React.Component<Prop, State> {
    static defaultProps = defaultProp

    private readonly textarea_ref: React.RefObject<HTMLTextAreaElement> = React.createRef();
    private readonly scrollbar_ref: React.RefObject<Scrollbars> = React.createRef();
    private readonly ref: React.RefObject<HTMLDivElement> = React.createRef();

    private last_message_date: Date | undefined = undefined;
    private messages: any[] = [];
    static propTypes: Dict<any>;

    private track_last_message: boolean;
    private history: any[] = [];
    private should_update_history: boolean = false;
    private resizeObserver: ResizeObserver;

    constructor(props: Prop) {
        super(props);
        this.state = {width: 0, height: 0}

        this.textarea_ref = React.createRef()
        this.ref = React.createRef()

        this.track_last_message = true

        this.resizeObserver = new ResizeObserver(() => {this.onResize()})
    }

    onResize() {
        if (this.ref.current && (this.ref.current.offsetWidth !== this.state.width || this.ref.current.offsetHeight !== this.state.height)) {
            const current_width = this.ref.current.offsetWidth
            const current_height = this.ref.current.offsetHeight

            console.debug(`onResize: ${current_width}x${current_height}`)
            this.setState({
                width: current_width, height: current_height
            })

            const history = this.history
            this.messages = []
            this.last_message_date = undefined
            this.history = []

            for (const message of history) {
                switch (message["role"]) {
                    case "user":
                        this.messages.push(this.getUserMessageTag(message["content"], message["date"]))
                        break
                    case "assistant":
                        this.messages.push(this.getBotMessageTag(message["content"], message["date"]))
                        break
                    default:
                        console.error(`unexpected role: ${message["role"]}`)
                }
            }
        }
    }

    getDateTag(date: Date) {
        let time = undefined
        if (
            (this.last_message_date === undefined)
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

    getUserMessageTag(msg: string, date: Date | undefined = undefined) {
        if (date === undefined) {
            date = new Date()
        } else {
            date = new Date(date)
        }

        this.history.push({"role": "user", "content": msg, "date": date})
        this.should_update_history = true

        return (
           <NewUserMessage key={`user-message-${this.messages.length}`} onAnimationEnd={() => this.scrollToBottomIfPossible()}>
               {msg}
               {this.getDateTag(date)}
           </NewUserMessage>
        )
    }

    getBotMessageUpdatingTag() {
        return (
            <LoadingNewBotMessage
                key="bot-updating-message"
                onAnimationStart={() => this.scrollToBottomIfPossible()}
            >
                {this.getMessageAvatarTag()}
                <span></span>
            </LoadingNewBotMessage>
        )
    }

    removeBotMessageUpdatingTag() {
        const idx = this.messages.findIndex(element => {return element.key === "bot-updating-message"})
        if (idx >= 0) {
            this.messages.splice(idx, 1)
        }
    }

    getBotMessageTag(msg: string, date: Date | undefined = undefined) {
        if (date === undefined) {
            date = new Date()
        } else {
            date = new Date(date)
        }

        this.history.push({"role": "assistant", "content": msg, "date": date})
        this.should_update_history = true

        return (
           <NewBotMessage
               key={`bot-message-${this.messages.length}`}
               onAnimationEnd={() => this.scrollToBottomIfPossible()}
           >
               {this.getMessageAvatarTag()}
               {msg}
               {this.getDateTag(date)}
           </NewBotMessage>
        )
    }

    getTitleAvatarTag() {
        const {avatar_image_path} = this.props;

        return (
            <TitleBotIcon>
                <img src={avatar_image_path} alt="Bot Icon"/>
            </TitleBotIcon>
        )
    }

    getMessageAvatarTag() {
        const {avatar_image_path} = this.props;

        return (
            <MessageBotIcon width={this.state.width * 0.1 + "px"} left={-this.state.width * 0.11 + "px"}>
                <img src={avatar_image_path} alt="Bot Icon"/>
            </MessageBotIcon>
        )
    }

    componentDidUpdate(prevProps: Readonly<InferProps<typeof Chat.propTypes>>, prevState: Readonly<State>, snapshot?: any) {
        const {
            send_bot_message, setProps
        } = this.props

        if (send_bot_message !== null) {
            setProps({send_bot_message: null})
        }

        this.adjustTextArea()

        // Update history
        if (this.should_update_history) {
            this.should_update_history = false
            setProps({history: this.history})
        }

        // on resize
        if (this.ref.current) {
            this.resizeObserver.observe(this.ref.current)
        }

        // Load initial_history

        const {
            initial_history
        } = this.props;

        if (initial_history !== undefined && this.state.width !== undefined) {
            console.debug("initial_history added")
            for (const historyRecord of initial_history) {
                switch (historyRecord["role"]) {
                    case "user":
                        this.messages.push(this.getUserMessageTag(historyRecord["content"], historyRecord["date"]))
                        break
                    case "assistant":
                        this.messages.push(this.getBotMessageTag(historyRecord["content"], historyRecord["date"]))
                        break
                    default:
                        console.error(historyRecord["role"] + " not expected")
                        break
                }
            }
            this.should_update_history = true
            setProps({initial_history: null})
        }
    }

    scrollToBottomIfPossible() {
        const scrollbar = this.scrollbar_ref.current
        if (this.track_last_message && scrollbar) {
            const top_at_bottom = scrollbar.getScrollHeight() -  scrollbar.getClientHeight()
            console.debug(`scroll to bottom: ${top_at_bottom}`)
            // @ts-ignore
            this.scrollbar_ref.current?.view.scroll({
                top: top_at_bottom,
                behavior: "smooth"
            })

        }
    }

    adjustTextArea() {
        const this_textarea = this.textarea_ref.current
        if (this_textarea) {
            this_textarea.style.height = String(0)
            this_textarea.style.height = this_textarea.scrollHeight + "px"
        }
    }

    render() {
        const {
            id, bot_name,
            n_submits, is_bot_typing,
            send_bot_message,
            setProps,
        } = this.props;

        console.debug(
            "onRender:",
            id, bot_name, n_submits, is_bot_typing, send_bot_message,
            this.track_last_message
        )

        if (is_bot_typing) {
            this.removeBotMessageUpdatingTag()
            this.messages.push(this.getBotMessageUpdatingTag())
        }

        if (send_bot_message !== null) {
            this.removeBotMessageUpdatingTag()
            this.messages.push(this.getBotMessageTag(send_bot_message))
        }

        const onSubmit = () => {
            const msg = this.textarea_ref.current?.value
            if (msg !== undefined) {
                setProps({n_submits: n_submits + 1})
                this.textarea_ref.current!.value = ""
                this.messages.push(this.getUserMessageTag(msg))
            }
        }

        // const scrollbars_props = {
        //     autoHide: true,
        //     autoHideTimeout: 1000,
        //     autoHideDuration: 200
        // }
        const scrollbars_props = {
            autoHide: false
        }

        return (
            <Main id={id} ref={this.ref}>
                <Title>
                    <Header>{bot_name}</Header>
                    {this.getTitleAvatarTag()}
                </Title>

                <Messages>
                    <Scrollbars
                        ref={this.scrollbar_ref}

                        onScrollStart={() => {
                            const scrollbar = this.scrollbar_ref.current
                            if (scrollbar) {
                                const top_at_bottom = scrollbar.getScrollHeight() - scrollbar.getClientHeight()
                                this.track_last_message = top_at_bottom - scrollbar.getScrollTop() <= 0
                            }
                        }}
                        onScrollStop={() => {
                            const scrollbar = this.scrollbar_ref.current
                            if (scrollbar) {
                                const top_at_bottom = scrollbar.getScrollHeight() - scrollbar.getClientHeight()
                                this.track_last_message = top_at_bottom - scrollbar.getScrollTop() <= 50
                            }
                        }}
                        {...scrollbars_props}
                    >
                        {this.messages}
                    </Scrollbars>
                </Messages>

                <MessageBox>
                    <MessageInput
                        ref={this.textarea_ref}
                        name="user-input"
                        placeholder="Type message..."
                        onKeyDown={
                            (event: KeyboardEvent) => {
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
                                setProps({user_message: this.textarea_ref.current?.value})
                            }
                        }
                    />
                    <MessageSubmit
                        type="submit"
                        onClick={
                            () => onSubmit()
                        }
                    >
                        Send
                    </MessageSubmit>
                </MessageBox>
            </Main>
        );
    }
}

// Chat.propTypes = {
//     /**
//      * The ID used to identify this component in Dash callbacks.
//      */
//     id: PropTypes.string,
//
//     /**
//      * A Bot name that will be printed when this component is rendered.
//      */
//     bot_name: PropTypes.string.isRequired,
//
//     avatar_image_path: PropTypes.string.isRequired,
//
//     /**
//      * The value displayed in the input.
//      */
//     user_message: PropTypes.string,
//
//     is_bot_typing: PropTypes.bool,
//
//     send_bot_message: PropTypes.string,
//
//     n_submits: PropTypes.number,
//
//     initial_history: PropTypes.arrayOf(
//         PropTypes.shape({
//             role: PropTypes.string,
//             content: PropTypes.string
//         })
//     ),
//
//     history: PropTypes.arrayOf(
//         PropTypes.shape({
//             role: PropTypes.string,
//             content: PropTypes.string
//         })
//     ),
//
//     /**
//      * Dash-assigned callback that should be called to report property changes
//      * to Dash, to make them available for callbacks.
//      */
//     setProps: PropTypes.func
// };

// Chat.defaultProps = {
//     n_submits: 0,
//     user_message: "",
//     is_bot_typing: false,
//     send_bot_message: null,
//     history: []
// };


const Main = styled.div`
    position: relative;
    /*top: 50%;*/
    /*left: 50%;*/
    /*transform: translate(-50%, -50%);*/
    width: 100%;
    height: 100%;
    /*max-height: 500px;*/
    z-index: 2;
    overflow: hidden;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
