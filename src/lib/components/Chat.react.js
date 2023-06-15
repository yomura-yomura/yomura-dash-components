import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {Title, Header, TitleBotIcon} from "../styles/chat/header"
import {Messages, MessageBotIcon, MessageTimestamp, NewUserMessage, NewBotMessage, LoadingNewBotMessage} from "../styles/chat/messages"
import {MessageBox, MessageInput, MessageSubmit} from "../styles/chat/footer"
import { Scrollbars } from 'react-custom-scrollbars';
import styled from "styled-components"


/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.textarea_ref = createRef()
        this.scrollbar_ref = createRef()
        this.last_message_date = undefined
        this.messages = []

        this.ref = createRef()

        this.state = {width: undefined, height: undefined}

        this.track_last_message = true

        this.history = []
        this.should_update_history = false
    }

    onResize() {
        const current_width = this.ref.current.offsetWidth
        const current_height = this.ref.current.offsetHeight
        if (current_width !== this.state.width || current_height !== this.state.height) {
            console.debug(`onResize: ${current_width}x${current_height}`)
            this.setState({width: current_width, height: current_height})

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

    getDateTag(date) {
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

    getUserMessageTag(msg, date=undefined) {
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

    getBotMessageTag(msg, date=undefined) {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
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
            const resizeObserver = new ResizeObserver(() => {this.onResize()})
            resizeObserver.observe(this.ref.current)
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
        if (this.track_last_message) {
            const top_at_bottom = this.scrollbar_ref.current.getScrollHeight() -  this.scrollbar_ref.current.getClientHeight()
            console.debug(`scroll to bottom: ${top_at_bottom}`)
            this.scrollbar_ref.current.view.scroll({
                top: top_at_bottom,
                behavior: "smooth"
            })

        }
    }

    adjustTextArea() {
        const this_textarea = this.textarea_ref.current
        this_textarea.style.height = 0
        this_textarea.style.height = this_textarea.scrollHeight + "px"
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
            const msg = this.textarea_ref.current.value
            if (msg !== "") {
                setProps({n_submits: n_submits + 1})
                this.textarea_ref.current.value = ""
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
                            const top_at_bottom = this.scrollbar_ref.current?.getScrollHeight() -  this.scrollbar_ref.current?.getClientHeight()
                            this.track_last_message = top_at_bottom - this.scrollbar_ref.current.getScrollTop() <= 0
                        }}
                        onScrollStop={() => {
                            const top_at_bottom = this.scrollbar_ref.current?.getScrollHeight() -  this.scrollbar_ref.current?.getClientHeight()
                            this.track_last_message = top_at_bottom - this.scrollbar_ref.current.getScrollTop() <= 50
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
                            event => {
                                if (!event.shiftKey && (event.key === "Enter")) {
                                    onSubmit()
                                    event.preventDefault()

                                    this.textarea_ref.current.style.height = 0
                                }
                            }
                        }
                        onInput={
                            () => {
                                this.adjustTextArea()
                                setProps({user_message: this.textarea_ref.current.value})
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

Chat.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A Bot name that will be printed when this component is rendered.
     */
    bot_name: PropTypes.string.isRequired,

    avatar_image_path: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    user_message: PropTypes.string,

    is_bot_typing: PropTypes.bool,

    send_bot_message: PropTypes.string,

    n_submits: PropTypes.number,

    initial_history: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string,
            content: PropTypes.string
        })
    ),

    history: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string,
            content: PropTypes.string
        })
    ),

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

Chat.defaultProps = {
    n_submits: 0,
    user_message: "",
    is_bot_typing: false,
    send_bot_message: null,
    history: []
};


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
