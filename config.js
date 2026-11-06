// Preencha com os dados do seu projeto Supabase (Project Settings > API).
// Esta chave é pública por natureza; a senha do painel não fica aqui.
window.VOTACAO = {
  url: "https://aznngspenmwoopwohybd.supabase.co",
  chave: "sb_publishable_ZWB-_zVZDGvkPibzrRP9OQ_73y9io-y"
};
window.chamar = async function (funcao, dados) {
  var r = await fetch(VOTACAO.url + "/rest/v1/rpc/" + funcao, {
    method: "POST",
    headers: { apikey: VOTACAO.chave, "Content-Type": "application/json" },
    body: JSON.stringify(dados || {})
  });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.json();
};
