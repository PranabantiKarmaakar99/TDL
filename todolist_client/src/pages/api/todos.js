import Todo from "../../../../server/model/Todo.js";

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })

        await newTodo.save();

        return response.status(200).json(newTodo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

// export default async function handler(req, res) {
//     const { name, message } = req.body;
//     try {
//       await handleFormInputAsync({ name, message });
//       res.redirect(307, '/todos');
//     } catch (err) {
//       res.status(500).send({ error: 'failed to fetch data' });
//     }
//   }