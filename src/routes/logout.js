export async function del(req, res) {
  delete req.session.token;
  res.end('Successfuly logged out');
}