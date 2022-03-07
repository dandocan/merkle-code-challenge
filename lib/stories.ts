export async function getOrderedTenRandomStories() {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    let storyIds = await res.json()
    let stories = [];
    for (let i=0; i<10; i++){
        let randomId = Math.floor(Math.random() * storyIds.length);
        let story = await getStoryById(storyIds[randomId])
        let authorKarma = await getAuthorKarma(story.by)
        stories.push({...story, karma: authorKarma});
        storyIds.splice(randomId, 1);
    }
    stories.sort((a, b) => b.score - a.score)
    return stories;
}

async function getStoryById(id: Number) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const story = await res.json();
    return story;
}

async function getAuthorKarma(userId: String){
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`);
    const author = await res.json();
    return author.karma;
}