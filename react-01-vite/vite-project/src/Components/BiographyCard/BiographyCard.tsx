import type { BiographyData } from "../../data/BiographyData";
import styles from "./BiographyCard.module.css"

interface BiographyCardProps {
    data: BiographyData;
}

const BiographyCard = ({data} : BiographyCardProps) => {
return (
        <>
            <div className={styles.cotnainer}>
                <header className={styles.header}>
                    <h1>{data.name}</h1>
                    <p>{data.birthYear}-{data.deathYear}</p>
                </header>
            <div className="">
                

            </div>
                <section className="biography"> 
                </section>
            </div>
        </>
    )}

export default BiographyCard;