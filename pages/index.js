import Header from "../components/Header"
import Banner from "../components/Banner";
const styles = {
  wrapper: 'mx-auto'
}
export default function Home() {
  return (
    <>
    <div className={styles.wrapper}>
      <Header/>
      <Banner/>
      </div>
    </>

  )
}
