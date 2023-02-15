export default function obtenerParametrosDeURL(url) : { offset: string, limit: string }{
  let offset : string;
  let limit : string;
  try {
    offset = /offset=([0-9]+)/gi.exec(url)!.pop()!;
    limit = /limit=([0-9]+)/gi.exec(url)!.pop()!;
  } catch (e) {
    offset = "";
    limit = "";
  }
  return { offset, limit };
}
