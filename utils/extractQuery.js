function extractQueryParams(urlString) {
    const parsedUrl = new URL(urlString);
    const queryParams = parsedUrl.searchParams
    const queryObj = {};
  
    for (const [key, value] of queryParams.entries()) {
      queryObj[key] = value;
    }
  
    return queryObj;
  }

  module.exports=extractQueryParams;