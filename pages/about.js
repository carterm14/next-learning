import Meta from "../components/Meta"
import aboutStyles from "../styles/About.module.css"

const about = () => {
    console.log(aboutStyles)
    return (
      <div>
        <Meta title='About' />
        <h1 className={aboutStyles.title}>Michael Carter, Software Engineer</h1>
        <div className={aboutStyles.image}>
          <img src='/Michael.jpeg' />
        </div>
        
        <p className={aboutStyles.description}>
          Born in Fairfax, VA, Michael Carter is the product of the rough 
          Northern Virginia public school system, graduating from the University 
          of Virginia in 2016. In 2017, Michael moved to New York City to be 
          closer to the birthplace of hip-hop and the annual hot dog eating 
          contest in Coney Island. In his free time, Michael enjoys shooting 
          hoops, playing guitar, exploring the city with friends, and run-on 
          sentences. Michael's favorite basketball player is Kevin Love but 
          back when he was fat.
        </p>
      </div>
    )
}

export default about
