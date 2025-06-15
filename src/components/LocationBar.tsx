import { secondaryFont } from "../styles";

interface Location {
  title: string;
  url: string;
}

interface LocationBar__Props {
  locationData: Location[];
  split: () => string[];
}

const LocationBar = (props: LocationBar__Props) => {
  return (
    <>
      <style>{`
        #location-bar {
        }

        .location-bar-bttn {
          font-family: ${secondaryFont};
          color: #0a0f16;
          background-color: rgba(255,255,255,.8);
          cursor: pointer;
          font-size: 1rem;
          padding: .5em;
          border: solid 3px #0a0f16;
          outline: solid 3px  rgba(255,255,255,.8);
          margin-right: 1em;
          margin-left: 1em;
          margin-bottom: 2em;
        }

        .location-bar-bttn:hover {
          background-color: rgba(255,255,255,1);
          outline: solid 3px  rgba(255,255,255,.8);
        }
        
        .location-bar-bttn:active {
          background-color: rgba(255,255,255,.5);
          outline: solid 3px  rgba(255,255,255,.8);
        }

        .location-bar-arrow {
            color: white;
            margin-top: .3em;
            font-size: 2em;
            color: rgba(255,255,255,.65);

        }
    
    `}</style>
      <div id="location-bar">
        {
          props.split().map((location, idx) => {
            return (
              <span key={`${idx}-location`}>
                <button onClick={() => console.log("click")} className="location-bar-bttn">{location}</button>
                {idx < props.split().length - 1 && <span className="location-bar-arrow">{">"}</span>}
              </span>
            )
          })
        }
      </div>
    </>
  )
}

export default LocationBar