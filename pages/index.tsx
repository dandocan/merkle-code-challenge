import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import { getOrderedTenRandomStories } from '../lib/stories'
import Story from '../components/story'

//Home page
//Props: Stories loaded in from API, dark mode toggle boolean, dark mode toggle function
export default function Home({stories, dark, setDark}) {
  return (
    <Layout dark={dark} setDark={setDark}>
        <div className={styles.container}>
            {
              (!stories) ? (<div>Loading...</div>) : (
                <div>
					{stories.map((story)=>{
						return <Story story={story} key={story.id} dark={dark}></Story>
					})}
                </div>
              )
            }
        </div>
    </Layout>
  )
}

//Retrieving stories from API
export async function getServerSideProps(context) {
    const stories = await getOrderedTenRandomStories();
    return {
      	props: {
        	stories
    	}
    }
}
