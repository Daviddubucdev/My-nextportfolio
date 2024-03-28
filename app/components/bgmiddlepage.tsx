import Image from 'next/image';
import JSmosaic from '../public/images/backgroundft.png';

export default function BannerJS() {
    return (


        <div className='main-bottom'>
            <Image
                src={JSmosaic}
                alt="picture of enumeration of tech in front-end world"
                layout="responsive"
                quality={100}
                width={1920}

            />
        </div>

    );
}