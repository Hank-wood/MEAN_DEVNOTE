## Read
    Setting environment variables
    
    find u pc path  D:.......nvmw
    
    set "PATH=D:.......nvmw;%PATH%"
    
    need root run CMD
    
    
    6.10.3
    
    nvmw install v6.10.3          Install a specific version number
    
    
    v6.10.3
    
    unfound
    nvmw install 6.10.3
    
    
    https://nodejs.org/dist/v6.10.3/
    
    
    It is trying to download node using https://nodejs.org/dist/v7.9.0/x64/node.exe 
    whereas the correct uri should be https://nodejs.org/dist/v6.10.3/win-x64/node.exe
    

    // i checked the download link is not right
    
    I have this error too and it looks like it wasn't fixed. I wanted install node v4.0.0.
    
    To fix this I changed 137 line in nvmw.bat file to:
    
    set NODE_EXE_URL=%NVMW_NODEJS_ORG_MIRROR%/%NODE_VERSION%/win-x64/node.exe
    
    nvmw use v6.10.3 
    
    // = =still not ok
    
    Installation failed    Failed to  download it
    
     
    so go 
    https://nodejs.org/dist/v6.10.3/   download it and  decompression it will be fine :)


    
    