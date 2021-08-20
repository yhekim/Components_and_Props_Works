import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>
        React Dersleri ,<IsimGoster isim="Cem" link="/Cem" />
      </h1>
      <Hosgeldiniz isim="" link="">
        {/* buaraya yazacağım 
        değerler kullanılmadığı 
        için gösterilmezler; */}
        <h3>Selamlar ! (props children buradan gelir)</h3>
      </Hosgeldiniz>
    </div>
  );
}

function Hosgeldiniz(props) {
  return (
    <div>
      <p>
        Hoşgeldiniz, <IsimGoster isim={props.isim} />
      </p>

      <h3>{props.children}</h3>
    </div>
  );
}

function IsimGoster(props) {
  return (
    <a href={props.link} alt={props.alt}>
      {props.isim || "misafir"}
    </a>
  );
}
