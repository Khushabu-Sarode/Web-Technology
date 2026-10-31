function GetPath(key) 
{
    var keyValuePair = {"Dashboard": "/db", "Profile": "/profile"};
    return keyValuePair[key];
}

export default GetPath;