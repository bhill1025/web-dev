import posts from '../data/tweets.json';

const tweets = (state = posts,action) => {
    switch (action.type) {
        case 'create-tweet':
            const tweet = {
                _id: (new Date()).getTime() + '',
                "topic": "Web Development",
                "userName": "Brian Hill",
                "verified": false,
                "handle": "bhill1025",
                "time": "Now",
                ...action,
                "avatar-image": "/images/me.jpg",
                "logo-image": "/images/me.jpg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            return ([
                    tweet,
                ...state,
                ]
            );
        case 'delete-tweet':
            return state
                .filter(tweet => tweet._id !== action.tweet._id);
        case 'like-tweet':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.stats.likes--;
                    } else {
                        tweet.liked = true;
                        tweet.stats.likes++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
        default:
            return(state);
    }

};

export default tweets;
