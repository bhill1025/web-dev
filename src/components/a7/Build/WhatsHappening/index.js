import React, {useState} from "react";
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tweetClickHandler = () => {
        dispatch({type: 'create-tweet',
            tweet: whatsHappening
        });
    }
    return(
        <ul className="list-group">
            <li className="list-group-item wd-whats-happening-no-border">
                <div className="row">
                    <div className="col-1">
                        <img src="/images/me.jpg"
                             className="mt-2 wd-avatar-image-2 rounded-circle"
                             style={{width: "100%"}}/>
                    </div>
                    <div className="col-11">
                        <ul className="list-group">
                            <li className="list-group-item wd-whats-happening">
                                <textarea value={whatsHappening}
                                          placeholder="What's Happening"
                                          onChange={(event) =>
                                              setWhatsHappening(event.target.value)}
                                          className="form-control wd-whats-happening-text">
                                </textarea>
                            </li>
                            <li className="list-group-item wd-whats-happening-no-border">
                                <div className="row">
                                    <div className="col-9">
                                        <span><i className="fa fa-check-circle"></i>
                                            <i className="fa fa-check-circle"></i>
                                            <i className="fa fa-check-circle"></i>
                                            <i className="fa fa-check-circle"></i>
                                        </span>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-primary wd-tweet-button" onClick={tweetClickHandler}>
                                            Tweet
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
);
}
export default WhatsHappening;