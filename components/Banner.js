import Image from "next/image";
import Logo from '../static/logo.JPG'
const styles = {
    wrapper: 'flex justify-center gap-10 p-5',
    content: 'max-w-7xl flex-1 flex justify-center',
    hoverEffect: 'hover:italic hover:underline'

};
const Banner = () => {
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Image className={styles.logo} src={Logo} height={450} width={350}/>
            </div>
        </div>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.hoverEffect}> You Look Cute Today</div>
            </div>
        </div>
        </>


    )
}

export default Banner