export class CommonMethods {
  checkResponse(res, url) {
    if (!res.ok) {
      const errData = new Error(
        `Could not fetch ${url}, received ${res.status}`
      );
      errData.status = res.status;

      throw errData;
    }
  }

  async sendResponse(url, method, body) {
    const options = body
      ? this.setRequestOptions(method, body)
      : this.setRequestOptions(method);
    const res = await fetch(`http://localhost:4000/api${url}`, options);
    this.checkResponse(res, url);

    return res.json().catch((e) => {
      throw new Error(`Could not parse response, received ${e}`);
    });
  }

  setRequestOptions = (method, body) => {
    if (body) {
      return {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }
    return {
      method,
    };
  };
}
