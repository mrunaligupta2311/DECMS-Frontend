import { useEffect, useRef, useState } from 'react'
import { Camera, CircleStop, Play, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react'
import './CameraVerification.css'

export default function CameraVerification({ onRecorded }) {
  const videoRef=useRef(null), streamRef=useRef(null), recorderRef=useRef(null), chunksRef=useRef([])
  const [state,setState]=useState('idle'), [error,setError]=useState(''), [preview,setPreview]=useState('')
  useEffect(()=>()=>{streamRef.current?.getTracks().forEach(t=>t.stop()); if(preview)URL.revokeObjectURL(preview)},[preview])
  const start=async()=>{
    setError('')
    try{
      const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'user'},audio:true})
      streamRef.current=stream; videoRef.current.srcObject=stream
      const recorder=new MediaRecorder(stream); recorderRef.current=recorder; chunksRef.current=[]
      recorder.ondataavailable=e=>{if(e.data.size)chunksRef.current.push(e.data)}
      recorder.onstop=()=>{const blob=new Blob(chunksRef.current,{type:recorder.mimeType||'video/webm'});const url=URL.createObjectURL(blob);setPreview(url);onRecorded?.(blob);setState('recorded');stream.getTracks().forEach(t=>t.stop())}
      recorder.start();setState('recording')
    }catch(e){setError('Camera or microphone permission was not granted, or this browser does not support recording.');setState('idle')}
  }
  const stop=()=>{if(recorderRef.current?.state==='recording')recorderRef.current.stop()}
  const reset=()=>{if(preview)URL.revokeObjectURL(preview);setPreview('');onRecorded?.(null);setState('idle');setError('')}
  return <div className="camera-verification">
    <div className="camera-heading"><span><Camera size={15}/> LIVE IDENTITY RECORDING</span><small>CAMERA CAPTURE ONLY · NO FILE PICKER</small></div>
    {state==='recorded'?<video className="camera-preview" src={preview} controls/>:<div className="camera-live"><video ref={videoRef} autoPlay muted playsInline/><div className="camera-placeholder"><Camera size={27}/><span>{state==='recording'?'Recording live verification…':'Camera preview will appear here'}</span></div>{state==='recording'&&<i className="recording-dot"/>}</div>}
    {error&&<div className="camera-error"><AlertCircle size={14}/>{error}</div>}
    <div className="camera-controls">{state==='idle'&&<button type="button" onClick={start}><Play size={14}/> Start live recording</button>}{state==='recording'&&<button type="button" className="stop-recording" onClick={stop}><CircleStop size={14}/> Stop & save recording</button>}{state==='recorded'&&<><span><CheckCircle2 size={14}/> Recording captured in this browser session</span><button type="button" className="reset-recording" onClick={reset}><RotateCcw size={13}/> Record again</button></>}</div>
    <p>The browser captures a live camera recording only. No video-file upload control is provided. Production submission must send this captured recording securely to the software-owner verification service.</p>
  </div>
}
