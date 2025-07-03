function mostrar(secao) {
  const conteudo = document.getElementById('principal');
  const sobreMim = 'Oi, me chamo Marcel. Tenho 37 anos. Gosto muito de filmes de terror, ouvir música e jogar Magic the Gathering com meus amigos.';
  const formacao = 'Estou cursando Análise e Desenvolvimento de Sistemas na Uninter.';
  const portfolio = 'Aqui estão alguns dos meus projetos:';

  console.log("Seção clicada:", secao);

  if (secao === 'sobre_mim') {
    conteudo.innerHTML = '<h2>Sobre mim</h2><p>' + sobreMim + '</p>';
    console.log("Exibindo sobre mim");
  } else if (secao === 'formacao') {
    conteudo.innerHTML = '<h2>Formação</h2><p>' + formacao + '</p>';
    console.log("Exibindo formação");
  } else if (secao === 'portfolio') {
    conteudo.innerHTML = '<h2>Portfólio</h2><p>' + portfolio + '</p>';
    console.log("Exibindo portfólio");
  } else if (secao === 'contato') {
    conteudo.innerHTML = `
      <h2>Contato</h2>
      <form>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome">

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email">

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" rows="4" placeholder="Deixe sua mensagem"></textarea>

        <input type="submit" value="Enviar">
      </form>
    `;
  }
}