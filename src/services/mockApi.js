export const wait = (ms=350) => new Promise(resolve => setTimeout(resolve, ms))
export const createId = (prefix='REC') => `${prefix}-${Date.now().toString().slice(-6)}`
export const formatBytes = bytes => bytes < 1024*1024 ? `${(bytes/1024).toFixed(0)} KB` : `${(bytes/(1024*1024)).toFixed(1)} MB`
export const demoHash = value => Array.from({length:64},(_,i)=>'0123456789abcdef'[(value.charCodeAt(i%value.length)+i*7)%16]).join('')
