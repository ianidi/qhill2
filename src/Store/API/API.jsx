import ky from "ky";

const API_URL = process.env.REACT_APP_API_URL;

export async function applyActiveFilters({ filter }) {
  const res = await ky
    .post(API_URL + "search/filters/active", {
      json: {
        filter,
      },
    })
    .json();
  return res;
}
export async function getFund({ account }) {
  const acc = account !== null ? `?account=${account}` : "";

  const res = await ky.get(`${API_URL}fund${acc}`).json();
  return res;
}
export async function getFundById({ id }) {
  const res = await ky
    .get(API_URL + "fund/" + id, {
      // mode: "no-cors",
    })
    .json();
  return res;
}
export async function getTradePairs() {
  const res = await ky.get(`${API_URL}trade_pairs`).json();
  return res;
}
export async function uploadImage({ formData }) {
  const res = await ky
    .put(`${API_URL}fund/${"1"}`, {
      body: formData,
      headers: {},
    })
    .json();
  return res;
}
export async function saveProfile({ address, signature, name, email, CV }) {
  const res = await ky
    .put(`${API_URL}user/${address}`, {
      json: {
        signature,
        name,
        email,
        CV,
      },
    })
    .json();
  console.log(res);
  return res;
}
