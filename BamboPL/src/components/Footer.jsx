import '../css/footer.css';
import logo from '../components/images/Logo_niebieskie_mniejsze.png';

const Footer = () => {
    return ( 
        <div className='footer'>

            <table>
                <tr>
                    <td>Olsztyn Bałtycka 151</td>
                    <td>Tel: 999 999 999</td>
                    <td>Email: BamboPl@gmail.com</td>
                </tr>
            </table>
{/* 
            <div className="minilogo_footer">

                <img src={logo} alt={"Logo"} className='imgs_footer'/>

            </div> */}

        </div>
    );
}

 
export default Footer;