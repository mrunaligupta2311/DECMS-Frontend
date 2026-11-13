import './PrimaryButton.css'
export default function PrimaryButton({children,variant='primary',size='normal',icon:Icon,onClick,type='button',disabled=false}) { return <button type={type} disabled={disabled} onClick={onClick} className={`btn btn-${variant} btn-${size}`}>{Icon&&<Icon size={16}/>}<span>{children}</span></button> }
