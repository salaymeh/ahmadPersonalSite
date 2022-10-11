import Link from "next/link";

const styles = {
    wrapper: 'flex justify-center gap-10 p-5',
    content: 'max-w-7xl flex-1 flex justify-center',
    bannerNav: 'flex gap-5 cursor-pointer items-center font-slkscr underline',
    hoverEffect: 'hover:text-orange-200 hover:underline decoration-orange-200 hover:text-xl'
};
const Header = () => {

return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
             <div className={styles.bannerNav} >
                <Link href="/"><div className={styles.hoverEffect}>Home</div></Link>
                <Link href={'https://drive.google.com/uc?export=download&id=1VM95abr1DPF8VpgxnZKhxprn4WP0hqcw'}><div className={styles.hoverEffect}>Resume</div></Link>
                <Link href={'/projects'}><div className={styles.hoverEffect}>Projects</div></Link>
                <Link href={'/hobbies'}><div className={styles.hoverEffect}>Hobbies</div></Link>
                <Link href={'/blog'}><div className={styles.hoverEffect}>Blog</div></Link>
             </div>
        </div>
    </div>
    )
}
export default Header