import posts from '../../components/a8/data/tweets.json';

const tweets = (state = posts,action) => {
    switch (action.type) {
        case 'fetch-all-tweets':
            let tws = action.tweets
            console.log(tws)
            tws.sort(function(a, b) {
                console.log(a.createdAt)
                let keyA = new Date(a.createdAt),
                    keyB = new Date(b.createdAt);
                console.log(keyA)
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
            console.log(tws)
            return(tws);
        case 'create-tweet':
            console.log(action.tweet)
            const tweet = {
                _id: (new Date()).getTime() + '',
                topic: "Web Development",
                userName: "Brian Hill",
                verified: false,
                handle: "bhill1025",
                "time": "Now",
                ...action.tweet,
                "avatar-image": "/images/me.jpg",
                "logo-image": "/images/me.jpg",
                "stats": {
                    "comments": 123,
                    "retweets": 234,
                    "likes": 345
                },
            };
            // console.log([
            //     tweet,
            //     ...state,
            // ])
            console.log("Tweet")
            console.log(tweet)
            return ([
                    tweet,
                ...state,
                ]
            );
        case 'delete-tweet':
            console.log("trying")
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
