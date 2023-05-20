import FeedNav from "../../components/FeedNav/FeedNav"
import VerticalList from "../../components/VeticalList/VerticalList"
import "./Feed.css"

const Feed = () => {
  return (
    <div className="feed-container">
      <FeedNav/>
        <div className="feed-left">
          <VerticalList  title={"Comunidades"}/>
        </div>
        <div className="feed-contend">

        </div>
        <div className="feed-right">
        <VerticalList title={"Usuários"}/>
        </div>
    </div>
  )
}

export default Feed