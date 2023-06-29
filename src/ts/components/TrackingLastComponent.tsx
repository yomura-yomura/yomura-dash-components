import React, {WheelEvent} from 'react';
import {DashComponentProps} from '../props';
import Scrollbars from 'react-custom-scrollbars';

type Props = {
    children: any
} & DashComponentProps;

const defaultProp = {
    children: null
}

type State = {
    // Insert state
}


/**
 * Component description
 */
export default class TrackingLastComponent extends React.Component<Props, State> {
    static defaultProps = defaultProp

    private readonly scrollbar_ref: React.RefObject<Scrollbars> = React.createRef();
    private is_scrolling_to_last_message: boolean;
    private track_last_message: boolean;

    constructor(props: Props) {
        super(props);

        this.track_last_message = true
        this.is_scrolling_to_last_message = false
    }

    render() {
        console.debug("TrackingLastComponent.render")

        // const scrollbars_props = {
        //     autoHide: true,
        //     autoHideTimeout: 1000,
        //     autoHideDuration: 200
        // }
        const scrollbars_props = {
            autoHide: false
        }

        return (
            <Scrollbars
                id={this.props.id}
                ref={this.scrollbar_ref}

                // onScrollStart={() => {
                //     const scrollbar = this.scrollbar_ref.current
                //     if (scrollbar && !this.is_scrolling_to_last_message) {
                //         const top_at_bottom = scrollbar.getScrollHeight() - scrollbar.getClientHeight()
                //         this.track_last_message = top_at_bottom - scrollbar.getScrollTop() <= 0
                //     }
                //     console.debug(`TrackingLastComponent Scrollbars.onScrollStart: ${this.track_last_message} ${this.is_scrolling_to_last_message}`)
                // }}
                onScroll={
                    (ev: Event) => {
                        const scrollbar = this.scrollbar_ref.current

                        if (scrollbar && !this.is_scrolling_to_last_message) {
                            const top_at_bottom = scrollbar.getScrollHeight() - scrollbar.getClientHeight()
                            this.track_last_message = top_at_bottom - scrollbar.getScrollTop() <= 0
                        }
                        console.debug(`TrackingLastComponent Scrollbars.onScroll: ${this.track_last_message} ${this.is_scrolling_to_last_message}`)
                    }
                }
                onScrollStop={() => {
                    const scrollbar = this.scrollbar_ref.current
                    if (scrollbar) {
                        if (this.is_scrolling_to_last_message) {
                            this.is_scrolling_to_last_message = false
                        } else {
                            const top_at_bottom = scrollbar.getScrollHeight() - scrollbar.getClientHeight()
                            this.track_last_message = top_at_bottom - scrollbar.getScrollTop() <= 100
                        }
                    }
                    console.debug(`TrackingLastComponent Scrollbars.onScrollEnd: ${this.track_last_message} ${this.is_scrolling_to_last_message}`)
                }}
                {...scrollbars_props}
            >
                {this.props.children}
            </Scrollbars>
        )
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {
        console.debug("TrackingLastComponent.componentDidUpdate")
        this.scrollToBottomIfPossible()
    }

    componentDidMount() {
        this.scrollbar_ref.current.view.addEventListener(
            "wheel",
            (event: WheelEvent) => {
                console.debug("TrackingLastComponent Scrollbars wheel event: ", event)
                if (event.deltaY < 0) {
                    this.is_scrolling_to_last_message = false
                }
            }
        )
    }

    scrollToBottomIfPossible() {
        const scrollbar = this.scrollbar_ref.current
        if (this.track_last_message && scrollbar != undefined) {
            const top_at_bottom = scrollbar.getScrollHeight() -  scrollbar.getClientHeight()
            console.debug(`scroll to bottom: ${top_at_bottom}`)

            this.is_scrolling_to_last_message = true
            this.scrollbar_ref.current?.view.scroll({
                top: top_at_bottom,
                behavior: "smooth"
            })
        }
    }
}
