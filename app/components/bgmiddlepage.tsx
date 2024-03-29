import Image from 'next/image';
import JSmosaic from '../public/images/backgroundft.png';


export default function BannerJS() {
    return (

        <Image
            src={JSmosaic}
            alt="picture of enumeration of tech in front-end world"
            layout="background"
            quality={100}
        />
    );
}