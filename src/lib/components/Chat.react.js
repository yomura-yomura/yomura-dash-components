import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import styles from "../styles/Chat.module.css"
import { Scrollbar } from 'react-scrollbars-custom';


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
        this.last_message_min = undefined
        this.messages = []
    }

    getDateTag(time=undefined) {
        if (time === undefined) {
            let d = new Date()
            if (this.last_message_min !== d.getMinutes()) {
                this.last_message_min = d.getMinutes();
                time = String(d.getHours()).padStart(2, "0") + ":" + String(this.last_message_min).padStart(2, "0")
            }
        }

        return (
            <div className={styles.timestamp}>
                {time}
            </div>
        )
    }

    getUserMessageTag(msg, time=undefined) {
        return (
           <div
               className={`${styles.message} ${styles.messagePersonal} ${styles.messageNew}`}
               key={`user-message-${this.messages.length}`}
           >
               {msg}
               {this.getDateTag(time)}
           </div>
        )
    }

    getBotMessageUpdatingTag() {
        return (
            <div
                className={`${styles.message} ${styles.loading} ${styles.messageNew}`}
                key="bot-message-updating"
            >
                {this.getAvatarTag()}
                <span></span>
            </div>
        )
    }

    removeBotMessageUpdatingTag() {
        const idx = this.messages.findIndex(element => {return element.key === "bot-message-updating"})
        if (idx >= 0) {
            this.messages.splice(idx, 1)
        }
    }

    getBotMessageTag(msg, time=undefined) {
        return (
           <div
               className={`${styles.message} ${styles.messageNew}`}
               key={`bot-message-${this.messages.length}`}
           >
               {this.getAvatarTag()}
               {msg}
               {this.getDateTag(time)}
           </div>
        )
    }

    getAvatarTag() {
        const {
            avatar_image_path
        } = this.props;
        return (
            <figure className={styles.avatar}>
                <img src={avatar_image_path} alt="Bot Icon"/>
            </figure>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const {
            history, setProps
        } = this.props;

        if (history !== null) {
            console.log(history)
            for (const historyRecord of history) {
                switch (historyRecord["role"]) {
                    case "user":
                        this.messages.push(this.getUserMessageTag(historyRecord["content"], historyRecord["time"]))
                        break
                    case "assistant":
                        this.messages.push(this.getBotMessageTag(historyRecord["content"], historyRecord["time"]))
                        break
                    default:
                        console.error(historyRecord["role"] + " not expected")
                        break
                }
            }
            setProps({history: null})
        }
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {
            send_bot_message, setProps
        } = this.props

        if (send_bot_message !== null) {
            setProps({send_bot_message: null})
        }

        this.adjustTextArea()

        this.scrollbar_ref.current.scrollToBottom()
    }

    adjustTextArea() {
        const this_textarea = this.textarea_ref.current
        this_textarea.style.height = 0
        this_textarea.style.height = this_textarea.scrollHeight + "px"
        console.log(this_textarea.style.height)
    }

    render() {
        const {
            id, bot_name, n_submits, is_bot_typing,
            send_bot_message,
            setProps
        } = this.props;

        console.log(id, bot_name, n_submits, is_bot_typing, send_bot_message)

        this.removeBotMessageUpdatingTag()
        if (is_bot_typing) {
            this.messages.push(this.getBotMessageUpdatingTag())
        }

        if (send_bot_message !== null) {
            this.messages.push(this.getBotMessageTag(send_bot_message))
        }

        const onSubmit = () => {
            console.log(this.textarea_ref.current)
            const msg = this.textarea_ref.current.value
            if (msg !== "") {
                setProps({n_submits: n_submits + 1})
                this.textarea_ref.current.value = ""
                this.messages.push(this.getUserMessageTag(msg))
            }
        }

        return (
            <div id={id} className={styles.chat}>
                <div className={styles.chatTitle}>
                    <p>{bot_name}</p>
                    {this.getAvatarTag()}
                </div>
                <Scrollbar ref={this.scrollbar_ref} className={styles.messages} removeTrackYWhenNotUsed={true} noScrollX={true}>
                    <div className={styles.messagesContent}>
                        {this.messages}
                    </div>
                </Scrollbar>
                <div className={styles.messageBox}>
                    <textarea
                        ref={this.textarea_ref}
                        name="user-input"
                        className={styles.messageInput}
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
                    <button
                        type="submit"
                        className={styles.messageSubmit}
                        onClick={
                            () => onSubmit()
                        }
                    >
                        Send
                    </button>
                </div>
            </div>
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
    history: null
};
