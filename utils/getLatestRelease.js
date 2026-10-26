import { urlLatestRelease } from "../utils/constants.js";

// Si el repo del firmware aun no tiene releases (o falla la consulta),
// se devuelve '' para que no aparezca el aviso de "Download latest FW".
export const getLatestRelease = () => {
  return new Promise((resolve, reject) => {
    fetch(urlLatestRelease)
      .then((rsp) => {
        return rsp.json();
      })
      .then((data) => {
        let latest_ver = data['tag_name'] || '';
        resolve(latest_ver);
      })
      .catch((_) => {
        resolve('');
      });
  });
};

export default getLatestRelease;
