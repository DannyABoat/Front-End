import photo10 from '../images/NETFLIX.webp'
import photo11 from '../images/SPOTIFY.webp'
import photo12 from '../images/NIKE.png'
import photo13 from '../images/ARGOS.webp'
import photo14 from '../images/BOOTS.webp'
import photo15 from '../images/Next.webp'


const End = () => {
    return(

    <div>
        <p4>
            <h2>Checkout with millions of brands you love</h2>
        </p4>
        <br></br><br></br>
        <nav class="flex-nav">
            <ul>
                <li><img src={photo10} alt=""></img></li>
                <li><img src={photo11} alt=""></img></li>
                <li><img src={photo12} alt=""></img></li>
                <li><img src={photo13} alt=""></img></li>
                <li><img src={photo14} alt=""></img></li>
                <li><img src={photo15} alt=""></img></li>
            </ul>
        </nav>
        <hr></hr>

        <footer>
            * Paying friends back and chipping in requires an account with PayPal. The recipient will need to create an account with PayPal if they don't already have one.
            ** Buyer Protection is available on eligible purchases only. 180 day time limit and other terms apply.
            PayPal (Europe) S.à r.l. et Cie, S.C.A. is duly licensed as a Luxembourg credit institution in the sense of Article 2 of the law of 5 April 1993 on the financial sector as amended and is under the prudential supervision of the Luxembourg supervisory authority, the Commission de Surveillance du Secteur Financier, with registered office in L-1150 Luxembourg. Deemed authorised and regulated by the Financial Conduct Authority. The nature and extent of consumer protections may differ from those for firms based in the UK. Details of the Temporary Permissions Regime, which allows EEA-based firms to operate in the UK for a limited period while seeking full authorisation, are available on the Financial Conduct Authority’s website.
        </footer>

    </div>
    

    
    )
}

export default End;