const dateArray =  Array(31).fill(0).map((ele,index)=> ele+index)
const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'Jun',
    'July',
    'Auguest',
    'September',
    'October',
    'November',
    'December'
]
const yearArray = Array(25).fill(2000).map((year,index) => year + index)

const userProfiles = [
    {
        id : 1 ,
        mobile : 9156706438,
        password : '9156706438',
        dateOfBirth : '5th/march/2001',
        name  : 'The White House',
        handlerName : '@The White House' ,
        organization : 'United States government organization',
        followers : 200,
        followings : 400,
        joinedDate : '22 dec 2022',
        profilePic : 'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tweets : [
            {   tweetId : 11 ,
                tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
                tweetCount : 100,
                retweetCount : 100 ,
                likesCount : 100,
                viewsCount : '102k',
                TweetReplies : [
                    {
                        name : 'Arjun ranavat',
                        handlerName : '@Arjun6787',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        name : 'charls Darvin',
                        handlerName : '@charls',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            },
            
        ]
    },
    {
        id : 2 ,
        mobile : 6574685763 ,
        password : '6574685763',
        dateOfBirth : '20/april/1998',
        name : 'Mukund',
        handlerName : '@kumarmukund',
        organization : '',
        followers : 200,
        followings : 400,
        joinedDate : '22 dec 2022',
        profilePic : 'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tweets:[
            {
                tweetId : 21 ,
                tweetText : 'For someone to live another has to die. That is wildlife. My shot that was featured in NatGeo. Shot using @NikonIndia gear.',
                tweetPic : 'https://lh3.googleusercontent.com/KdBVQy9qYOUvkWIAZVU0xxiCSfHlSIyxubAi_fDQguitxEOSbHdJS0nhZ5XxVuhggFIGnyWfQd6e_THednJT0r1dYMabudzArp8mimZxguSM4iHTodAVCxaf3TqPKl3Lk4HJ2wR1zQ=w1920-h1080',
                tweetCount : 200,
                retweetCount : 200 ,
                likesCount : 200,
                viewsCount : '10k',
                hastags : ['#wildLife','#photoGraphy'],
                TweetReplies : [
                    {
                        name : 'Karan kumar',
                        handlerName : '@Kkumar',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        name : 'Darshan patra',
                        handlerName : '@patraD7898',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },

                ]
            }
        ]
    },
    {
        id : 3,
        mobile : 7778889990 ,
        password : '7778889990',
        dateOfBirth : '27/february/1990',
        name : 'Usain St. Leo Bolt',
        handlerName : '@usainbolt',
        organization : '',
        followers : 200,
        followings : 400,
        joinedDate : '22 dec 2022',
        profilePic : 'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tweets : [
            {
                tweetId : 31 ,
                tweetText : 'Earned..Not Given.',
                tweetPic : 'https://lh3.googleusercontent.com/pasZP7Q7djnEfYziWLb-U5F1Ga_YpGXbxoggi_H3YuCFZeXPBij6l7SuJRnh39osyU0omD-OON3O9w46qNWJ7eFhNwo1LOe0PU7gANdMGHNYgo6mPlIVJKk1AoJJVy2D7bptiaUqpw=w1920-h1080',
                tweetCount : 700,
                retweetCount : 700 ,
                likesCount : 900,
                viewsCount : '100k',
                refLink : 'https://www.globalwildlife.org/blog/',
                TweetReplies : [
                    {
                        name : 'Akshay chaudari',
                        handlerName : '@AC',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        name : 'Sujeet mandale',
                        handlerName : '@Er_Sujeet',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
           }
        ]  
    },
    {
        id : 4 ,
        email : 'andrew@gmail.com',
        password : 'andrew123',
        dateOfBirth : '07/auguest/1997',
        name : 'Andrew Elliott',
        handlerName : '@andrewje_home',
        organization : '',
        followers : 200,
        followings : 400,
        joinedDate : '22 dec 2022',
        profilePic : 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tweets : [
            {
                tweetId : 41 ,
                tweetText : 'Stolen.. Not earned. ',
                tweetPic : 'https://lh3.googleusercontent.com/4aSGO7MxlG112HGNyNS05HcVDtz7XAC8bUlieGaFHSyCMYJh8GVRR17I5OhcyVvxWWjR9-Ibu4vgmZhRe6rcPfJT-qAFi6TvTDAlXpLu_vooIsm3CMdTdB7JMYvheeI9474Fy9ZxFw=w1920-h1080',
                tweetCount : 400,
                retweetCount : 327 ,
                likesCount : 90,
                viewsCount : '7k',
                hastags : ['#sports','#Winners'],
                TweetReplies : [
                    {
                        name : 'Rajan kashyap',
                        handlerName : '@kashyapR',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        name : 'Shreyash',
                        handlerName : 'I_am_shreyash',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            }
        ]  
    },
    {
        id : 5 ,
        email : 'RVCJ@gmail.com',
        password : 'RVCJ@123' ,
        dateOfBirth : '14/feb/1989',
        name : 'RVCJ Media',
        handlerName : '@RVCJ_FB',
        organization : '',
        followers : 200,
        followings : 400,
        joinedDate : '22 dec 2022',
        profilePic : 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tweets : [
            {
                tweetId : 51 ,
                tweetText : 'Well Played Team India ',
                tweetPic : 'https://lh3.googleusercontent.com/Jt-Vf0_wj_T3HgLPsjJz-sqzds1WB_nxZR1BRG_Fy2MetPgymruJINllajLUWA9KhYdScF_ZIgbl-4ZrGw4DFI5Y4q3uImG5_-H4okqGh4Lo14AB4Fwhx8lUqSWhfaYuDVI1Qd-CHg=w1920-h1080',
                tweetCount : 650,
                retweetCount : 699 ,
                likesCount : 900,
                viewsCount : '17k',
                hastags : ['#HockeyLover' , '#Hockey' , '#Team India'],
                TweetReplies : [
                    {
                        name : 'Durgen',
                        handlerName : '@Mess_owner',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                    {
                        name : 'charls Darvin',
                        handlerName : '@charls',
                        tweetReplyText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    },
                ]
            }
        ]
    },

]

const trendinsData = [
    {
        id : 1 ,
        trender : '#Shahrukh khan',
        tweets : '102k',
        isNotIntrested : false
    },
    {
        id :2 ,
        trender : '#Pathan',
        tweets : '30k',
        isNotIntrested : false
    },
    {
        id : 3 ,
        trender : '#BioDiversity',
        tweets : '12k',
        isNotIntrested : false
    },
    {
        id :4,
        trender : '#SRK',
        tweets : '30k',
        isNotIntrested : false
    },
    {
        id :5,
        trender : '#Dipika',
        tweets : '102k',
        isNotIntrested : false
    },
    {
        id :6,
        trender : '#IPL',
        tweets : '300k',
        isNotIntrested : false
    }
]

module.exports  = {
    dateArray,
    yearArray,
    monthArray,
    userProfiles,
    trendinsData
}
