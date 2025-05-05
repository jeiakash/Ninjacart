export default function Profile() {
    return (
      <div className="container mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">About</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus 
                rhoncus ut eleifend nibh porttitor.
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
              <h3 className="text-lg font-medium mb-2">Experience</h3>
              <div className="space-y-2">
                <div>
                  <p className="font-medium">Senior Developer - XYZ Inc.</p>
                  <p className="text-gray-600 text-sm">2020 - Present</p>
                </div>
                <div>
                  <p className="font-medium">Developer - ABC Corp</p>
                  <p className="text-gray-600 text-sm">2018 - 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }