const { DEV_CLIENT_PAGES_MANIFEST } = require("next/dist/shared/lib/constants");

function status(request, response) {
  response.status(200).json({ chave: "São acima da média" });
}

export default status;
