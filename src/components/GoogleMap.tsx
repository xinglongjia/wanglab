interface GoogleMapProps {
  address: string;
  width?: string;
  height?: string;
}

export default function GoogleMap({ address, width = "100%", height = "400px" }: GoogleMapProps) {
  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  
  // Use Google Maps embed without API key (simpler approach)
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="google-map-container" style={{ width, height }}>
      <iframe
        title="Google Maps"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
} 