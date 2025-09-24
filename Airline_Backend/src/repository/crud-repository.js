class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            return await this.model.create(data);
        } catch (error) {
            console.error("Repository error (create):", error);
            throw error;
        }
    }

    async delete(modelId) {
        try {
            return await this.model.destroy({ where: { id: modelId } });
        } catch (error) {
            console.error("Repository error (delete):", error);
            throw error;
        }
    }

    async update(modelId, data) {
        try {
            return await this.model.update(data, { where: { id: modelId } });
        } catch (error) {
            console.error("Repository error (update):", error);
            throw error;
        }
    }

    async get(modelId) {
        try {
            return await this.model.findByPk(modelId);
        } catch (error) {
            console.error("Repository error (get):", error);
            throw error;
        }
    }

    async getAll() {
        try {
            return await this.model.findAll();
        } catch (error) {
            console.error("Repository error (getAll):", error);
            throw error;
        }
    }
}

module.exports = CrudRepository;
