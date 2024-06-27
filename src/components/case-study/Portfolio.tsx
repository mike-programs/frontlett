import rightArrow from '../../assets/icons/down-right 1.png';
import Cofound from './Cofound';

// Importing images
import aeeki from '../../assets/logos/aeeki.png';
import billaw from '../../assets/logos/billaw.png';
import bilogos from '../../assets/logos/bilogos.png';
import boldtell from '../../assets/logos/boldtell.png';
import boocant from '../../assets/logos/boocant.png';
import bujnewsGreen from '../../assets/logos/bujnews green.png';
import eret from '../../assets/logos/eret.png';
import fan from '../../assets/logos/fan.png';
import founderShool from '../../assets/logos/Founder Shool.png';
import frendal from '../../assets/logos/frendal.png';
import frontlett from '../../assets/logos/frontlett.png';
import hostull from '../../assets/logos/hostull.png';
import knowixed from '../../assets/logos/knowixed.png';
import knowtixed from '../../assets/logos/knowtixed.png';
import kreeca from '../../assets/logos/kreeca.png';
import krowdback from '../../assets/logos/krowdback.png';
import kureen from '../../assets/logos/Kureen-02.png';
import logo from '../../assets/logos/logo.png';
import mannyImages from '../../assets/logos/manny-images.png';
import mezzorCreative from '../../assets/logos/mezzor-creative.png';
import muse from '../../assets/logos/muse.png';
import otunna from '../../assets/logos/otunna.png';
import perpaid from '../../assets/logos/perpaid.png';
import qntecx from '../../assets/logos/qntecx.png';
import rakayar from '../../assets/logos/rakayar.png';
import recurl from '../../assets/logos/recurl.png';
import rekruit from '../../assets/logos/rekruit.png';
import remanno from '../../assets/logos/remanno.png';
import renty from '../../assets/logos/renty.png';
import sboColor from '../../assets/logos/SBO-color.png';
import simpext from '../../assets/logos/simpext.png';
import skiemake from '../../assets/logos/SKIMAKE.png';
import ssDark from '../../assets/logos/ss-dark.png';
import stuwok from '../../assets/logos/stuwok.png';
import triftPayLogoDesign from '../../assets/logos/TriftPay_Logo_Design.png';
import ullweb from '../../assets/logos/ullweb.png';
import wanodu from '../../assets/logos/wanodu.png';
import wettaLogistics from '../../assets/logos/wetta-logistics.png';
import zebullon from '../../assets/logos/zebullon.png';
import zimrMobile from '../../assets/logos/zimr-mobile.png';

// Array of objects
const imageCardVariant = [
    { imgsrc: aeeki, body: 'Image for aeeki' },
    { imgsrc: billaw, body: 'Image for billaw' },
    { imgsrc: bilogos, body: 'Image for bilogos' },
    { imgsrc: boldtell, body: 'Image for boldtell' },
    { imgsrc: boocant, body: 'Image for boocant' },
    { imgsrc: bujnewsGreen, body: 'Image for bujnews green' },
    { imgsrc: eret, body: 'Image for eret' },
    { imgsrc: fan, body: 'Image for fan' },
    { imgsrc: founderShool, body: 'Image for Founder Shool' },
    { imgsrc: frendal, body: 'Image for frendal' },
    { imgsrc: frontlett, body: 'Image for frontlett' },
    { imgsrc: hostull, body: 'Image for hostull' },
    { imgsrc: knowixed, body: 'Image for knowixed' },
    { imgsrc: knowtixed, body: 'Image for knowtixed' },
    { imgsrc: kreeca, body: 'Image for kreeca' },
    { imgsrc: krowdback, body: 'Image for krowdback' },
    { imgsrc: kureen, body: 'Image for Kureen-02' },
    { imgsrc: logo, body: 'Image for logo' },
    { imgsrc: mannyImages, body: 'Image for manny-images' },
    { imgsrc: mezzorCreative, body: 'Image for mezzor-creative' },
    { imgsrc: muse, body: 'Image for muse' },
    { imgsrc: otunna, body: 'Image for otunna' },
    { imgsrc: perpaid, body: 'Image for perpaid' },
    { imgsrc: qntecx, body: 'Image for qntecx' },
    { imgsrc: rakayar, body: 'Image for rakayar' },
    { imgsrc: recurl, body: 'Image for recurl' },
    { imgsrc: rekruit, body: 'Image for rekruit' },
    { imgsrc: remanno, body: 'Image for remanno' },
    { imgsrc: renty, body: 'Image for renty' },
    { imgsrc: sboColor, body: 'Image for SBO-color' },
    { imgsrc: simpext, body: 'Image for simpext' },
    { imgsrc: skiemake, body: 'Image for SKIMAKE' },
    { imgsrc: ssDark, body: 'Image for ss-dark' },
    { imgsrc: stuwok, body: 'Image for stuwok' },
    { imgsrc: triftPayLogoDesign, body: 'Image for TriftPay_Logo_Design' },
    { imgsrc: ullweb, body: 'Image for ullweb' },
    { imgsrc: wanodu, body: 'Image for wanodu' },
    { imgsrc: wettaLogistics, body: 'Image for wetta-logistics' },
    { imgsrc: zebullon, body: 'Image for zebullon' },
    { imgsrc: zimrMobile, body: 'Image for zimr-mobile' }
];

export default function Portfolio() {
    return (
        <div>
            <div className="flex flex-col gap-3 text-center lg:gap-8 lg:mb-8">
                <h2 className="text-heading text-base capitalize lg:text-5xl">our studio portfolio</h2>
                <p className="font-light capitalize">Our 2024 Service Incubator Portfolio Companies</p>
            </div>

            {/* Display the loaded images */}
            <div className='grid grid-cols-4 gap-4 mx-auto lg:grid-cols-8 lg:gap-8 lg:w-[80%]'>
                {imageCardVariant.map((url, index) => (
                    <div className='bg-white w-20 h-12 rounded-xl px-4' key={index}>
                        <img src={url.imgsrc} alt={`Logo ${index}`} className='h-16 w-16 object-contain' />
                    </div>
                ))}
            </div>

            <div className='flex text-left mx-auto gap-1 justify-center my-10'>
                <p className='font-semibold capitalize underline underline-offset-2 text-heading'>view all companies</p>
                <img src={rightArrow} alt="right arrow" />
            </div>

            <Cofound />
        </div>
    );
}
