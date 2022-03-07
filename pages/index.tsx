import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import { getOrderedTenRandomStories } from '../lib/stories'
import Story from '../components/story'

export default function Home({stories}) {
  return (
    <Layout>
        <div className={styles.container}>
            {
              (!stories) ? (<div>Loading...</div>) : (
                <div>
                  {stories.map((story)=>{
                    return <Story story={story} key={story.id}></Story>
                  })}
                </div>
              )
            }
        </div>
    </Layout>
  )
}

export async function getStaticProps() {
    const stories = await getOrderedTenRandomStories();
    return {
      props: {
        stories
      }
    }
  }
