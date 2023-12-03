const DUMMY_EVENTS =[
    {
        id:'e1',
        title: 'Programming',
        details:'There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.The deepest principle in human nature is the craving to be appreciated.',
        date:"2021-05-03",
        image:'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
        inFeatured:'false',
    },
    {
        id:'e2',
        title: 'Networking',
        details:'There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.The deepest principle in human nature is the craving to be appreciated.',
        date:"2020-05-03",
        image:'https://plus.unsplash.com/premium_photo-1682430990153-8f0ecc3b9b50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV0d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
        inFeatured:'true',
    },
    {
        id:'e3',
        title: 'Business',
        details:'There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.The deepest principle in human nature is the craving to be appreciated.',
        date:"2023-05-03",
        image:'https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
        inFeatured:'false',
    },
    {
        id:'e4',
        title: 'Nature',
        details:'There is a certain enthusiasm in liberty, that makes human nature rise above itself, in acts of bravery and heroism.The deepest principle in human nature is the craving to be appreciated.',
        date:"2022-05-03",
        image:'https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww',
        inFeatured:'true',
    },
];

// console.log(DUMMY_EVENTS);
export function getFeaturedEvents(){
    return DUMMY_EVENTS.filter((event)=>event);
}