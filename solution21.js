function paperwork(n, m) {
    if (Math.sign(n) === -1 || Math.sign(m) === -1){
      return 0
    }else{
      return n*m
    }
}