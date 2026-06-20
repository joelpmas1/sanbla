// tweaks-app.jsx — drives the 5 variant dimensions for the Sanbla landing.
// The page itself is static HTML; this only flips body[data-*] attributes
// (read by styles.css) so the user can compare options live.

const SANBLA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "cards": "border",
  "icons": "line",
  "form": "two",
  "grad": "medium",
  "type": "display"
}/*EDITMODE-END*/;

function SanblaTweaks() {
  const [t, setTweak] = useTweaks(SANBLA_TWEAK_DEFAULTS);

  React.useEffect(() => {
    const b = document.body;
    b.setAttribute('data-cards', t.cards);
    b.setAttribute('data-icons', t.icons);
    b.setAttribute('data-form', t.form);
    b.setAttribute('data-grad', t.grad);
    b.setAttribute('data-type', t.type);
  }, [t.cards, t.icons, t.form, t.grad, t.type]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Tarjetas y módulos" />
      <TweakRadio label="Estilo de tarjeta" value={t.cards}
        options={[{value:'border',label:'Borde'},{value:'shadow',label:'Sombra'},{value:'fill',label:'Relleno'}]}
        onChange={(v) => setTweak('cards', v)} />

      <TweakSection label="Iconografía" />
      <TweakRadio label="Estilo de icono" value={t.icons}
        options={[{value:'line',label:'Lineal'},{value:'solid',label:'Sólido'}]}
        onChange={(v) => setTweak('icons', v)} />

      <TweakSection label="Formulario" />
      <TweakRadio label="Layout de campos" value={t.form}
        options={[{value:'two',label:'2 columnas'},{value:'one',label:'1 columna'}]}
        onChange={(v) => setTweak('form', v)} />

      <TweakSection label="Marca" />
      <TweakRadio label="Intensidad del degradado" value={t.grad}
        options={[{value:'subtle',label:'Sutil'},{value:'medium',label:'Media'},{value:'bold',label:'Intensa'}]}
        onChange={(v) => setTweak('grad', v)} />

      <TweakSection label="Tipografía" />
      <TweakRadio label="Titulares" value={t.type}
        options={[{value:'display',label:'Display'},{value:'neutral',label:'Neutra'}]}
        onChange={(v) => setTweak('type', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<SanblaTweaks />);
