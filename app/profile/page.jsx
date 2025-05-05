export default function Profile() {
    return (
      <div className="container mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold">Akash Krishnan</h2>
              <p className="text-gray-600">jxiakash@outlook.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">About</h3>
              <p className="text-gray-700">
              JEI AKASH M A is a driven and resourceful undergraduate student at Amrita Vishwa Vidyapeetham (Class of 2023–2027), 
              passionate about software development, startups, and solving real-world problems through technology. 
              built projects like a ticket reservation system and ERP dashboard. 
              I combines technical skills with entrepreneurial ambition, often participating in hackathons , to sharpen both product thinking and development. 
              He’s grounded by a humble upbringing and fueled by a vision to create impact through innovation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Interests</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Web Development</li>
                <li>Mobile Applications</li>
                <li>UI/UX Design</li>
                <li>Artificial Intelligence</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Undergraduation</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Amrita Vishwa Vidyapeetham.</p>
                  <p className="text-gray-600 text-sm">2023 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }