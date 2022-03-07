//Function that returns 10 stories with all the data needed. You can see the format of an individual story in the props of the Story component(components\story.tsx).
export async function getOrderedTenRandomStories() {
    //Fetch a pool of ids to select 10 random ones
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    let storyIds = await res.json()
    let stories = [];
    for (let i=0; i<10; i++){
        //Generate random number to select from ids
        let randomId = Math.floor(Math.random() * storyIds.length);
        let story = await getStoryById(storyIds[randomId])
        let authorKarma = await getAuthorKarma(story.by)
        //Merge data from 2 GET requests
        stories.push({...story, karma: authorKarma});
        //Remove id selected from the id array, ensures no duplicates
        storyIds.splice(randomId, 1);
    }
    //Sort desc based on score
    stories.sort((a, b) => b.score - a.score)
    return stories;
}

//Helper function, returns story data (title, author, score, timestamp, url, id) using id, but not author karma.
async function getStoryById(id: Number) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const story = await res.json();
    return story;
}

//Helper function, returns an author's karma using their id.
async function getAuthorKarma(userId: String){
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
    const author = await res.json();
    return author.karma;
}