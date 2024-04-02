export default function Gmap() {
    return (

        <>
            <style> {`
            .map-container{
              display: flex;
              flex-direction: column;
              width:600px;
              height: 450px;
              align-items: center;
              border: 2px solid white;
              padding: 1% 1% 1% 1%;
            }

            iframe{
            width:100%;
            height:100%;
            border:0; 
            }
            
            `}
            </style>

            <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d84086.79156808593!2d-79.28270355812!3d48.80647053481068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x4d271295a429f5fb%3A0xfe29be60d27f3166!2sAbitibi-Ouest%2C%20QC!3m2!1d48.8064999!2d-79.20030299999999!4m0!5e0!3m2!1sfr!2sca!4v1712078409032!5m2!1sfr!2sca"></iframe>
            </div>

        </>
    );
}