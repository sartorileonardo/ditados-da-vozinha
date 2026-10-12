const audios = [
  { titulo: "Água mole em pedra dura", arquivo: "audios/ditado_agua_mole_em_pedra_dura.mp3" },
  { titulo: "A batata e a casca", arquivo: "audios/ditado_batata_casca.mp3" },
  { titulo: "A bucica folgada", arquivo: "audios/ditado_bucica_folgada.mp3" },
  {
    titulo: "Cachorro que muito late",
    arquivo: "audios/ditado_cachorro_que_muito_late.mp3",
  },
  {
    titulo: "Por cima sai as errendas",
    arquivo: "audios/ditado_por_cima_sai_as_errendas.mp3",
  },
  {
    titulo: "Pulga em cachorro magro",
    arquivo: "audios/ditado_pulga_em_cachorro_magro.mp3",
  },
  { titulo: "De grão em grão", arquivo: "audios/ditado_de_grao_em_grao.mp3" },
  { titulo: "Deus ajuda", arquivo: "audios/ditado_deus_ajuda.mp3" },
  {
    titulo: "É dando que se recebe",
    arquivo: "audios/ditado_eh_dando_que_se_recebe.mp3",
  },
  { titulo: "Filho de peixe", arquivo: "audios/ditado_filho_de_peixe.mp3" },
  { titulo: "Gastar vela", arquivo: "audios/ditado_gastar_vela.mp3" },
  { titulo: "Gato por lebre", arquivo: "audios/ditado_gato_por_lebre.mp3" },
  { titulo: "Mandrião", arquivo: "audios/ditado_mandriao.mp3" },
  {
    titulo: "Dize-me com quem andas",
    arquivo: "audios/ditado_me_digas_com_quem_andas.mp3",
  },
  { titulo: "Mofas com a pomba", arquivo: "audios/ditado_mofas_com_a_pomba.mp3" },
  {
    titulo: "Não vai lavar louça",
    arquivo: "audios/ditado_nao_vai_lavar_louca.mp3",
  },
  { titulo: "Olho por olho", arquivo: "audios/ditado_olho_lho.mp3" },
  { titulo: "Olho por olho", arquivo: "audios/ditado_olho_por_olho.mp3" },
  { titulo: "Quem canta", arquivo: "audios/ditado_quem_canta.mp3" },
  { titulo: "Quem não tem cão", arquivo: "audios/ditado_quem_nao_tem_cao.mp3" },
  {
    titulo: "Segue toda vida reto",
    arquivo: "audios/ditado_segue_toda_vida_reto.mp3",
  },
  { titulo: "Serração baixa", arquivo: "audios/ditado_serracao_baixa.mp3" },
  { titulo: "Serração na serra", arquivo: "audios/ditado_serracao_na_serra.mp3" },
  { titulo: "Tupi", arquivo: "audios/ditado_tupi.mp3" },
  { titulo: "Vassoura", arquivo: "audios/ditado_vassoura.mp3" },
];

const button = document.querySelector("#play-audio");
const player = document.querySelector("#audio-player");
const status = document.querySelector("#audio-status");

let previousAudioIndex = -1;

function chooseAudioIndex() {
  if (audios.length === 1) {
    return 0;
  }

  let index;
  do {
    index = Math.floor(Math.random() * audios.length);
  } while (index === previousAudioIndex);

  return index;
}

button.addEventListener("click", async () => {
  if (audios.length === 0) {
    status.textContent =
      "Adicione os áudios no array audios, em script.js, para começar.";
    return;
  }

  const index = chooseAudioIndex();
  const audio = audios[index];
  previousAudioIndex = index;
  player.src = audio.arquivo;
  button.disabled = true;
  status.textContent = `Tocando: ${audio.titulo}`;

  try {
    await player.play();
  } catch (error) {
    button.disabled = false;
    status.textContent =
      "Não foi possível reproduzir este áudio. Confira o arquivo e tente novamente.";
    console.error("Falha ao reproduzir o ditado:", error);
  }
});

player.addEventListener("ended", () => {
  button.disabled = false;
  status.textContent = "Toque no botão para ouvir outra lembrança.";
});

player.addEventListener("error", () => {
  button.disabled = false;
  status.textContent =
    "Não foi possível carregar este áudio. Confira o caminho do arquivo.";
});
