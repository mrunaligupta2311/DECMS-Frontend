import './SectionHeading.css'
export default function SectionHeading({eyebrow,title,description,action}) { return <div className="section-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{description&&<p>{description}</p>}</div>{action&&<div className="section-action">{action}</div>}</div> }
