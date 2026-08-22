import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

function MyComplaints() {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
          setLoading(false)
          return
        }

        const response = await fetch(
          `http://localhost:5000/api/complaints/user/${user.id}`
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch complaints')
        }

        setComplaints(data)

      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchComplaints()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        Loading complaints...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-2 text-3xl font-bold">
          My Complaints
        </h1>

        <p className="mb-8 text-slate-400">
          View and track the complaints you have submitted.
        </p>
        <button
  onClick={() => navigate('/')}
  className="mb-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
>
  + Report New Issue
</button>

        {complaints.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="mb-2 text-xl font-semibold">
              No complaints yet
            </h2>

            <p className="text-slate-400">
              You haven't submitted any complaints.
            </p>
          </div>
        ) : (
          <div className="space-y-4">

            {complaints.map((complaint) => (
              <div
                key={complaint._id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >

                <div className="flex flex-col justify-between gap-4 sm:flex-row">

                  <div>
                    <h2 className="text-xl font-semibold">
                      {complaint.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Category: {complaint.category}
                    </p>
                  </div>

                  <span className="h-fit rounded-full bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
                    {complaint.status}
                  </span>

                </div>

                <p className="mt-4 text-slate-300">
                  {complaint.description}
                </p>

                <div className="mt-4 border-t border-slate-800 pt-4 text-sm text-slate-400">
                  <p>
                    📍 {complaint.location}
                  </p>

                  <p className="mt-1">
                    Submitted:{' '}
                    {new Date(complaint.createdAt).toLocaleString()}
                  </p>

                  <p className="mt-1">
                    Complaint ID: {complaint._id}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}

export default MyComplaints