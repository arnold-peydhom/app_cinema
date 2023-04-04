import './acceuil.css';
import img from '../../images/image1.jpg';
import img3 from '../../images/image3.jpg';
import img7 from '../../images/image7.jpg';
import img8 from '../../images/image8.jpg';
import img4 from '../../images/image4.jpg';
import img5 from '../../images/image5.jpg';
import img6 from '../../images/image6.jpg';

function BodyAcceuil(){
    return(
        <div className='row0'>
                <div className='row'>
                    <div className='card'>
                        <img src={img} className='image'/>
                    </div>
                    <div className='card'>
                        <img src={img3} className='image' id='image'/>
                 </div>
                    <div className='card'>
                     <img src={img7} className='image'/>
                 </div>
                 <div className='card'>
                        <img src={img8} className='image' id='image'/>
                 </div>

              <span className='textfield'>Bienvenue sur FILMS</span><br></br>
             <span id='textfield'>2k22</span>

                  <div className='description'>
            Decouvrez les programmes FILMS 2k22 en exclusivite et de nombreux films<br></br> 
                et series populaires..Inscrivez-vous et connectez vous  <br></br>
                        des maintenant pour en profiter 😉.
                    </div>

             </div>
                <div className='imageFlout'>
                    </div>
            <button type='button' className='button'>Vous etes membre de FILM 2k22 ?<br/><span className='color'>Identifiez-vous</span></button>
            <button type='button' className='button'>Commencez Votre<br/><span className='color'>Essaie gratuit</span></button><br/>
            <div className='amount'>Nous renouvelons votre abonnement au tarif de<marquee><span className='color'>3.99$ par mois</span></marquee></div>

            <div className='card2'>
                        <img src={img4} className='images'/>
                    </div>
                    <div className='card2'>
                        <img src={img5} className='images'/>
                 </div>
                    <div className='card2'>
                     <img src={img6} className='images'/>
                 </div>
                 <div className='card2'>
                        <img src={img} className='images'/>
                 </div>
    </div>
    
    )
}
export default BodyAcceuil;