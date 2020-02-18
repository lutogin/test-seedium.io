export default function collectData(req) {
  return {
    ...req.query,
    ...req.params,
    ...req.body,
  };
}
